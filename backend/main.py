from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",  # Replace with your frontend's origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class PipelineData(BaseModel):
    nodes: list
    edges: list

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    # Build adjacency list for the graph
    adjacency_list = {node['id']: [] for node in data.nodes}
    for edge in data.edges:
        source = edge['source']
        target = edge['target']
        adjacency_list[source].append(target)

    # Function to perform topological sort
    def is_dag(adjacency_list):
        from collections import deque
        
        in_degree = {node: 0 for node in adjacency_list}
        for nodes in adjacency_list.values():
            for node in nodes:
                in_degree[node] += 1

        queue = deque([node for node in in_degree if in_degree[node] == 0])
        visited_count = 0

        while queue:
            node = queue.popleft()
            visited_count += 1
            for neighbor in adjacency_list[node]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        return visited_count == len(adjacency_list)

    is_dag_result = is_dag(adjacency_list)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag_result}

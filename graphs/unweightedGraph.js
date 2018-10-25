/**
 * @author Rashik Ansar
 * Implemtaion of graph with the help of Adjacency List
 * Its Unweighted graph implemetation
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adding a vertex to the graph
   * @param {*} vertex The data of the vertex to add into graph
   * @returns {Graph}
   */
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      throw Error(`${vertex} already exist in graph... `);
    } else {
      this.adjacencyList[vertex] = [];
    }
    // return this;
  }

  /**
   * Removing a vertex from the graph
   * @param {*} vertex The data of the vertex to remove from graph
   */
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const itemInArray = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, itemInArray);
      }
      delete this.adjacencyList[vertex];
      // return this;  // Added for testing before traversal methods
    } else {
      throw Error(`${vertex} doesn't exist...`);
    }
  }

  /**
   * Adding an edge between two vertices in the graph
   * @param {*} vertex1
   * @param {*} vertex2
   */
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      // return this;
    } else {
      throw Error('Given vertex/vertices might not exist in graph...');
    }
  }

  /**
   * Removing an existing edge between two vertices in the graph
   * @param {*} vertex1
   * @param {*} vertex2
   */
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        i => i !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        i => i !== vertex1
      );
      // return this;
    } else {
      throw Error('Given vertex/vertices might not exist in graph...');
    }
  }

  /**
   * Travesal of the graph by breadth-first approach
   * @param {*} start Starting vertex for traversal
   * @returns {[]}
   */
  breadthFirstTraversal(start) {
    const queue = [];
    const result = [];
    const visited = {};
    let current;
    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach(x => {
        if (!visited[x]) {
          visited[x] = true;
          queue.push(x);
        }
      });
    }
    return result;
  }

  /**
   * Depth First Traversal (recursive approach)
   *
   * @param {*} start Starting vertex for traversal
   * @returns {[]}
   */
  DFTrecursuive(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) {
        throw Error('Incorrect starting vertex!');
      }
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(x => {
        if (!visited[x]) {
          return dfs(x);
        }
      });
    }
    dfs(start);
    return result;
  }
  /**
   * Depth First Traversal (Iterative approach)
   *
   * @param {*} start Starting vertex for traversal
   * @returns {[]}
   */
  DFTiterative(start) {
    const stack = [];
    const visited = {};
    const result = [];
    let current;

    stack.push(start);
    visited[start] = true;
    while (stack.length) {
      current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach(x => {
        if (!visited[x]) {
          visited[x] = true;
          stack.push(x);
        }
      });
    }
    return result;
  }
}

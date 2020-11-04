"""
Problem: There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, find out if it is possible to schedule all the tasks.

Time complexity: O(V + E)
Space complexity: O(V + E)
Difficulty: Medium
"""

from collections import deque

def is_scheduling_possible(tasks, prerequisites):
  graph = {task : [] for task in tasks}
  incoming_degree = {task: 0 for task in tasks}
  sorted_task = []
  sources = deque()
  
  # build up a graph
  for parent, child in prerequisites:
        graph[parent].append(child)
        incoming_degree[child] += 1

  # find sources 
  for task, degree in incoming_degree.items():
        if degree == 0:
              sources.append(task)

  # BFS 
  while sources:
        source = sources.popleft()
        sorted_task.append(source)
        for child in graph[source]:
              incoming_degree[child] -=1
              if incoming_degree[child] == 0:
                    sources.append(child)

  
  return len(sorted_task) == len(tasks)


def main():
  print("Is scheduling possible: " +
        str(is_scheduling_possible(3, [[0, 1], [1, 2]])))
  print("Is scheduling possible: " +
        str(is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])))
  print("Is scheduling possible: " +
        str(is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])))

main()
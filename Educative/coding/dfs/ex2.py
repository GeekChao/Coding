"""
Problem: 
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

Difficulty: Medium
"""

class TreeNode:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right
    
def find_paths(root, sum):
  allPaths = []

  def find_path(node, sum, paths):
    if node is None: return 

    paths.append(node.val)

    if node.val == sum and node.left is None and node.right is None:
       allPaths.append(list(paths))
    else:
      find_path(node.left, sum - node.val, paths)
      find_path(node.right, sum - node.val, paths)

    paths.pop()

  find_path(root, sum, [])

  return allPaths

def main():

  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(4)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  sum = 23
  print("Tree paths with sum " + str(sum) +
        ": " + str(find_paths(root, sum)))


main()
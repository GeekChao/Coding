/**
* Question: rotate a matrix by 90 degrees
* Solution: Start with the outermost square, exchange a element on each side mutually in each iteration.
* Time / Space Complexity: O(n2) / O(n2)
* Author: Mingchao Zou, Jul 8
**/

import java.io.*;
import java.lang.*;

class RotateMatrix{
    
/*    private void exchange(int[][] matrix, int N, int i, int j){
        int temp1, temp2, temp3;

        temp1 = matrix[j][N - 1];
        matrix[j][N - 1] = matrix[i][j];
        temp2 = matrix[N - 1][N - j - 1];
        matrix[N - 1][N - j - 1] = temp1;
        temp3 = matrix[N - j - 1][i];
        matrix[N - j - 1][i] = temp2;
        matrix[i][j] = temp3;
    }

    public void rotate90(int[][] matrix, int N){
        for(int i = 0; i < N / 2; i++)
            for(int j = i; j < N - 2 * i; j++){
                exchange(matrix , N - i -1, i, j);
            }
    }
*/
    public void rotate90(int[][] matrix, int n){
        for(int layer = 0; layer < n / 2; layer++){
            int first = layer;
            int last = n - 1 - layer;
            for(int i = first; i < last; i++){
    /* matrix[last - i][first] works only when assgin 0 to i every iteration, 
      but in this case i = first. */
                int offset = i - first;
                int top = matrix[first][i];
                matrix[first][i] = matrix[last - offset][first];
                matrix[last - offset][first] = matrix[last][last - offset];
                matrix[last][last - offset] = matrix[i][last];
                matrix[i][last] = top;
            }
        }
    }

    public void print(int[][] matrix, int N){
        for(int i = 0; i < N; i++){
            for(int j = 0; j < N; j++){
                System.out.print(matrix[i][j]);
                System.out.print("  ");
            }
                
            System.out.println();
        }
        
        System.out.println();
    }

    public int[][] createMatrix(int N){
        int[][] matrix = new int[N][N];
        for(int i = 0; i < N; i++)
            for(int j = 0; j < N; j++)
                matrix[i][j] = (int) Math.ceil(Math.random() * 9);
        
        return matrix;
    }

    public static void main(String[] args){
        RotateMatrix test = new RotateMatrix();
        int N = 4;
        int[][] matrix = test.createMatrix(N);
        test.print(matrix, N);
        test.rotate90(matrix, N);
        test.print(matrix, N);
    }
}

/*
* Lesson: Create a variable to store a state, if that state is not related with the variable in the iteration.
*/
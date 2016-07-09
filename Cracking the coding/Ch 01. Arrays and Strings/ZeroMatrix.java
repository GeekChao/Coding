/**
* Question: if an element in an matrix is 0, its entire row and column are set to 0.
* Solution: Create two arrays to store the state of each row and column.
* Time / Space Complexity: O(n2) / O(N + M)
* Author: Mingchao Zou Jul 9
*/

import java.io.*;
import java.lang.*;

class ZeroMatrix{

    private void setRowZero(int[][] matrix, int M, int N, int row){
        for(int i = 0; i < N; i++)
            matrix[row][i] = 0;  
    }

    private void setColZero(int[][] matrix, int M, int N, int col){
        for(int j = 0; j < M; j++)
            matrix[j][col] = 0;    
    }

    public void zeroMatrix(int[][] matrix, int M, int N){
        boolean[] rowSet = new boolean[M];
        boolean[] colSet = new boolean[N];
        
        for(int i = 0; i < M; i++)
            for(int j = 0; j < N; j++){
                if(matrix[i][j] == 0){
                    rowSet[i] = true;
                    colSet[j] = true;
                }
            }
        
        for(int i = 0; i < M; i++)
            if(rowSet[i]) setRowZero(matrix, M, N, i);
        
        for(int i = 0; i < N; i++)
            if(colSet[i]) setColZero(matrix, M, N, i);

    }

    public void print(int[][] matrix, int M, int N){
        for(int i = 0; i < M; i++){
            for(int j = 0; j < N; j++){
                System.out.print(matrix[i][j]);
                System.out.print("  ");
            }
                
            System.out.println();
        }
        
        System.out.println();
    }

    public int[][] createMatrix(int M, int N){
        int[][] matrix = new int[M][N];
        for(int i = 0; i < M; i++)
            for(int j = 0; j < N; j++)
                matrix[i][j] = (int) Math.ceil(Math.random() * 10) - 1;
        
        return matrix;
    }

    public static void main (String[] args){
        ZeroMatrix test = new ZeroMatrix();
        int M = 5, N = 4;
        int[][] matrix = test.createMatrix(M, N);
        test.print(matrix, M, N);
        test.zeroMatrix(matrix, M, N);
        test.print(matrix, M, N);
    }
}

/**
* Conclusion: Using the first row/column of matrix as a replacement for the boolean row/column array.
*/
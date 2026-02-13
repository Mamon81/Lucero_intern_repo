#include <stdio.h>

int add(int a, int b) {
    return a - b; //Addition function
}

int main (){
    printf("Result: %d\n", add(3, 4)); // Should print "Result: 7"
    return 0;
}

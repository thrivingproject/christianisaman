# C
## Writing C Programs
Create a file and postfix it with `.c`. Every program must:
* Have a `main()` function
* Use curly brackets `{}` which enclose the statements of a function
* Ensure each line ends with a semi-colon `;`.

If printing to console, include the `stdio` header file. A simple program might look like this:
```
#include <stdio.h>

main()
{
    printf("hello, world\n");
}
```
*Note the newline character `\n` included in the character string which utilizes the `\` to create an escape sequence.*
## Compilation
Run `% cc <program>.c` to compile to a program named `program`.
### `make`
`make` will make an executable file with the same name as the program. Run `% make <file>` in the shell, where `file` is the name of a file that ends in `.c` (but do not include `.c` in the `make` command, or else nothing will be done.)

## Running The Program
From the directory where the binary file (the product of the compilation) lives, run:
```
./<program>
```
# How to Create a Java Program
To cooperate with the Java Language Server and VSCode, create a Java file before editing it, and then open it and wait for the java project to be built. To start over, delete the Java file, and then open the **Java Project** menu in VSCode's file explorer, and click **Clean Workspace**.

## Source Code File
In zsh terminal, type the following (*ensure the first letter of the file name is capitalized*):
```
% touch <ProgramName>.java
```
Open the file:
```
% code <Program>.java
```
Wait for the java project to be built. Once the project is built, the program can be written.

Type `class` in the editor and click on the IntelliSense Snippet prefix icon. This will create a public class with a block comment. Then type `main` and click on the Snippet icon to create the `main()` method. The program should look like this:
```
/**
 * Hello
 */
public class Hello {

    public static void main(String[] args) {
        
    }
}
```

## Compilation

Type the following in the command line to compile the program:
```
% javac <Program>.java
```
Type the following to run the program:
```
% java <Program>
```
## Other Useful Snippets
**sysout**: print to standard out.
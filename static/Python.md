# Python Virtual Environments
## Create a virtual environment
Run `% python3 -m venv <relativePath>/.venv` where relative path is the path to the location where the virtual environment will reside relative the current directory.

## Activate and deactivate virtual environment
Run `% source <relativePath>/.venv/bin/activate` to activate the venv. Run `% deactivate` to deactivate the venv. Remove `.venv` to delete the virtual environment.

## Install packages to virtual environment
Run `pip install <package>` to install a package to the venv. *Only packages installed in the virtual environment will be available; likewise, packages installed in the venv will not be available outside of the venv.* **See [Python docs — venv](https://docs.python.org/3/library/venv.html) for more info.**

To export packages and let other developers install same packages and dependencies, create a `requirements.txt` file and direct the output of `pip freeze` to it:
 ```
% touch requirements.txt && pip freeze >> requirements.txt
```
To set up a new project with the same packages, run `pip install -r requirements.txt`
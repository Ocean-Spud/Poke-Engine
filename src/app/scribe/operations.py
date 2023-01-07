# All scribe functions

import os

class Operations:
    def __init__(self):
        pass

    def make(file_path, file_name):
        f = open(file_path + file_name, "w")
        f.close()

    # write() vs make() is kind of confusing
    # write() = write contents to a pre-existing file
    # make() = create a file

    def write(file_name_and_path, file_contents):
        f = open(file_name_and_path, "w")
        f.write(file_contents)
        f.close()

    def remove(file_name_and_path):
        os.remove(file_name_and_path)

# More operations will probably come soon
# ...Unless someone wants to contribute to this file

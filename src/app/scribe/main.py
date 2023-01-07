# Scribe
# The file manipulation process for Poke

import operations
import linecache
import os
import time

f = open("requests.legible", "r")

while True:
    if "make:" in f.read():
        operations.Operations.make(linecache.getline("requests.legible", 2), (linecache.getline("requests.legible", 3)))
        f.flush()
        os.fsync(f.fileno())

    if "write:" in f.read():
        operations.Operations.make(linecache.getline("requests.legible", 2)), (linecache.getline("requests.legible", 3))
        f.flush()
        os.fsync(f.fileno())

    if "remove" in f.read():
        operations.Operations.make(linecache.getline("requests.legible", 2))
        f.flush()
        os.fsync(f.fileno())

    print("test")

    time.sleep(1) # refresh only every one second to save memory
        
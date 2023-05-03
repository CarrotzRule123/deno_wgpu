from pyclibrary import CParser
import json
parser = CParser(['tools/webgpu.h'])
text = json.dumps(parser.defs)
with open('tools/webgpu.json', 'w') as file:
    file.write(text)
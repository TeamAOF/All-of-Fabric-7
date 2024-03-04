#!/usr/bin/env python3
"""Put Quests in a Circle

Usage:
	pqiac [-n] <radius> <x> <y> <quest>...

Options:
	-n	Dry-run: print out quest names and coordinates they would be assigned, but don't edit files.

"""

from docopt import docopt
from pprint import pprint
import re
import math
pi = math.pi

def pointsInCircle(x=0, y=0, r=100, n=10):
	return [(round(x+(math.cos(2*pi/n*i)*r)), round(y+(math.sin(2*pi/n*i)*r))) for i in range(0,n)]

def setPosInQuest(questFile, pos):
	posPattern = r'\s+-?\d+,\n\s+-?\d+\s+'
	with open(questFile, 'r+') as file:
		text = file.read()
		text = re.sub(posPattern, f'{pos[0]}, {pos[1]}', text)
		file.seek(0,0)
		file.write(text)
		file.truncate()
	
if __name__ == "__main__":
	args = docopt(__doc__, options_first=True)

	n = len(args['<quest>'])
	points = pointsInCircle(int(args['<x>']), int(args['<y>']), int(args['<radius>']), n)
	
	if args["-n"]:
		pprint(points)
		exit()

	for quest, pos in zip(args['<quest>'], points):
		setPosInQuest(quest, pos)

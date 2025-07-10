#Assignment 1: Basic Set Operations

set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

#union

set3 = set1.union(set2)
print(set3)

#intersection

set3 = set1.intersection(set2)
print(set3)

#difference 

set3 = set1.difference(set2)
print(set3)

#symetric difference 

set3 = set1.symmetric_difference(set2)
print(set3)

#check if set1 is subset of set2

set3 = set1.issubset(set2)
print(set3)

#add and remove element

set1.add(9)
print(set1)

set2.remove(8)
print(set2)

#modify sets
print("final set1:",set1)
print("final set2",set2)

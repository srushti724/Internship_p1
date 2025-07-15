#frozenset operation 
A = frozenset([10, 20, 30, 40])
B = frozenset([30, 40, 50, 60])

#Union of A and B.

union_set = A.union(B)
print(union_set)

# intersection

intersection_set = A.intersection(B)
print(intersection_set)  

#difference 

difference_set = A.difference(B)
print(difference_set) 

#symmetric difference 

symmetric_difference_set = A.symmetric_difference(B)
print(symmetric_difference_set)


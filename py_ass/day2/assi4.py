# Assignment4

# Create a tuple of 5 student names
students = ("vedant", "ishan", "ravi", "Sara", "piyu")

# Print the second student's name (index 1)
print("Second student:", students[1])

# Check if "vedant" is in the tuple
if "vedant" in students:
    print("vedant is in the student list.")
else:
    print("vedant is not in the student list.")

# Concatenate with another tuple of 3 new students
new_students = ("sia", "manas", "srushti")
all_students = students + new_students

# Print the length of the final tuple
print("Total number of students:", len(all_students))

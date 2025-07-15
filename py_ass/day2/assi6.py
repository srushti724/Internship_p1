# Step 1: Initial student dictionary
students = {
    "Srushti": 85,
    "Vedant": 92,
    "ishan": 78
}

# Step 2: Add a new student
new_name = input("Enter new student's name: ")
new_grade = float(input(f"Enter {new_name}'s grade: "))
students[new_name] = new_grade

# Step 3: Calculate average grade
average = sum(students.values()) / len(students)
print(f"\nAverage grade: {average:.2f}")

# Step 4: Identify the top performer
top_student = max(students, key=students.get)
top_grade = students[top_student]
print(f"Top performer: {top_student} with a grade of {top_grade}")

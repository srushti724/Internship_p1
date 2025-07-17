class example:
    def __init__(self,name,id):
        self.name = name
        self.id = id
    def admission(self):
        print(f"My name is {self.name} My id is {self.id}")

class example1:
    def __init__(self,name,id):
        self.name = name
        self.id = id
    def admission(self):
        print(f"My name is {self.name} My id is {self.id}")    

Student1 = example("srushti",1)
print(Student1.admission())

Student2 = example1("vedant",2)
print(Student2.admission())     
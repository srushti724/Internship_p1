def remove_duplicates(input_list):
    result = []
    seen = set()
    for item in input_list:
        if item not in seen:
            result.append(item)
            seen.add(item)
    return result


my_list = [10, 20, 10, 30, 20, 40, 50, 40, 50]

unique_list = remove_duplicates(my_list)

print("Original list:", my_list)
print("List after removing duplicates:", unique_list)

def merge_sort_unique(list1, list2):
    # Merge the two lists
    merged_list = list1 + list2
    
    # Remove duplicates by converting to a set, then back to a list
    unique_list = list(set(merged_list))
    
    # Sort in ascending order
    unique_list.sort()
    
    return unique_list

# Example input lists
list_a = [5, 2, 8, 2, 3]
list_b = [3, 7, 1, 8, 9]

# Call the function
result = merge_sort_unique(list_a, list_b)

# Output the result
print("List 1:", list_a)
print("List 2:", list_b)
print("Merged, unique, sorted list:", result)

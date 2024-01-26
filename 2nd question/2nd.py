def first_non_repeating_index(s):
    char_count = {}

    # Count occurrences of each character
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1

    # Find the first non-repeating character and its index
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i

    # If there is no non-repeating character, return -1
    return -1

# Example usage:
input_string = "abcabde"
result = first_non_repeating_index(input_string)

if result != -1:
    print(f"The index of the first non-repeating character is: {result}")
else:
    print("No non-repeating character found in the string.")

# Big O notation

# O(n)
def get_squared_numbers(numbers):
    squared = []
    for n in numbers:
        squared.append(n*n)
    return squared

# as input size increases, so does running time

numbers_arr = [2,3,4,5]
print(get_squared_numbers(numbers_arr))


# 0(1) or constant
stock_prices = [10.25, 11.50, 9.75, 12.00]
eps_numbers = [1.20, 0.95, 1.10, 1.40]

def find_first_pe(prices, eps, index):
    pe = prices[index] / eps[index]
    return pe

print(find_first_pe(stock_prices, eps_numbers, 1))
# the list does not iterate, the time remains constant


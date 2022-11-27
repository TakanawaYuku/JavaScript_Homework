from datetime import datetime
import time


def get_num(n):
    start_time = datetime.now()

    result_list = []
    n = 2

    while len(result_list) < n:

        check = False
        num = 0

        for num in result_list:

            if n % num == 0 & (n / num != 1):
                check = True
                break

        if (check == False):
            result_list.append(n)

        n = n + 1

    print(datetime.now() - start_time)
    return result_list


if __name__ == "__main__":
    (get_num(100000))

import pandas as pd
import csv

df = pd.read_csv('1.csv')
x = 'नहीं'
chat1 = ("मैं  मैंने  हम  हमने  मुझे मुझको हमें हमको हम मुझसे मेरे द्वारा हमसे हमारे हमको  हमें मेरा मेरी मेरे    हमारा हमारी हमारे मुझमें हममें मेरेको ")
line1 = chat1.strip().split()
# print(line1)
c1 = 0
c2 = 0
csv_filename = '1.csv'
def fun2(chat):
    global c1,c2
    words = chat.strip().split()
    n = len(words)
    for i in range(1, n):
        c1+=1
        words.insert(i, x)
        modified_sentence = ' '.join(words)
        words.pop(i)
        row = []
        row.append(modified_sentence)
        row.append(0)
        print(row)
        # with open(csv_filename, mode='a', newline='') as file:
        #     writer = csv.writer(file)
        #     writer.writerow(row)


def fun3(chat):
    global c1, c2
    words = chat.strip().split()
    n = len(words)
    for i in range(0, n):
        c2+=1
        words.insert(i, x)
        modified_sentence = ' '.join(words)
        words.pop(i)
        row = []
        row.append(modified_sentence)
        row.append(0)
        print(row)
        # with open(csv_filename, mode='a', newline='') as file:
        #     writer = csv.writer(file)
        #     writer.writerow(row)

def fun1(chat):
    words = chat.strip().split()
    if words[0] in line1:
        fun2(chat)
    else:
        fun3(chat)


# df['comment'].apply(fun1)
# print(df)
# fun1('क्यो आर चाहता हूं')
# fun1('मुझे मुझको हमें हमको हम मुझसे ')
print(c1,c2)


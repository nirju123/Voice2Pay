import csv


chat1 =("मैं मैंने हम हमने मुझे मुझको हमें हमको हम मुझसे मेरे द्वारा हमसे हमारे हमको   हमें मेरा मेरी मेरे	हमारा हमारी हमारे मुझमें हममें मेरेको ")
line1 = chat1.strip().split()

chat2 = "रूपया रूपये पैसा पैसे"
line2 = chat2.strip().split()
chat3 = "लेने  लेना  स्वीकृति  स्वीकार  सकारना  अंगीकार  प्रतिग्रहीत  मांगना मांग  दरकार  अनुरोध  चाहना  दावा  मांग जताना  आकांक्षा   "
line3 = chat3.split("  ")
# for word in line3:
#     print("*",word)

line4 = ["करना है" , "है"," ","चाहता हूं","चाहिए" ]

csv_filename = '1.csv'
c=0
for item in line1:
    for word1 in line2:
        for word2 in line3:
            for word3 in line4:
                tmp = item +" "+word1+" "+" "+word2+" "+word3
                row =[]
                row.append(tmp)
                row.append(2)
                print(c,row)
                c+=1
                with open(csv_filename, mode='a', newline='') as file:
                    writer = csv.writer(file)
                    writer.writerow(row)
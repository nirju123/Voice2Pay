import csv

# data = [
#     ['comment', 'value'],
#     ['मैंने रूपया भेजना है', 1]
# ]
#
# # Specify the file name
# file_name = '1.csv'
#
# # Writing data to the CSV file
# with open(file_name, mode='w', newline='') as file:
#     writer = csv.writer(file)
#     writer.writerows(data)
# 15000+86000+300000


chat1 =("मैं मैंने हम हमने मुझे मुझको हमें हमको हम मुझसे मेरे द्वारा हमसे हमारे हमको हमें मेरा मेरी मेरे हमारा हमारी हमारे मुझमें हममें मेरेको ")
line1 = chat1.strip().split()
# for word in line1:
#     print(word)

chat2 ="रूपया रूपये पैसा पैसे"
line2 = chat2.strip().split()
# for word in line2:
#     print(word)

chat3 ="भेजना  प्रेषित भिजवा  भिजवाना  पठा पठवाना चुकाना  चुका अदायगी अदा देना देने अंशदान सौंपना चुकाना पारित करना भेज "
line3= chat3.strip().split()
# for word in line3:
#     print(word)

line4 = [" ","कर दीजिये ","दीजिये ","करना है","है"]
# for word in line4:
#     print(word)

#
csv_filename = '1.csv'
c=0
for item in line1:
    for word1 in line2:
        for word2 in line3:
            for word3 in line4:
                tmp = item +" "+word1+" "+" "+word2+" "+word3
                row =[]
                row.append(tmp)
                row.append(1)
                print(c,row)
                c+=1
                # with open(csv_filename, mode='a', newline='') as file:
                #     writer = csv.writer(file)
                #     writer.writerow(row)




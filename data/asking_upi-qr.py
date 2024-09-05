import csv


chat1 =("मैं  मैंने  हम  हमने  मुझे मुझको हमें हमको हम मुझसे मेरे द्वारा हमसे हमारे हमको  हमें मेरा मेरी मेरे	हमारा हमारी हमारे मुझमें हममें मेरेको ")
line1 = chat1.strip().split()
line1.append(" ")
# for item in line1:
#     print("*",item)

chat2 = "क्यू आर  यूपीआई आईडी  यूपीआई  आईडी  फ़ोन नंबर  नंबर  के आर  क्यों आर  क्यो आर"
line2 = chat2.strip().split("  ")
# for item in line2:
#     print("*",item)

chat3 = "भेजना  प्रेषित भिजवा  भिजवाना  पठवाना  भेज   "
line3 = chat3.split("  ")
# for item in line3:
#     print("*",item)


chat4 = "करना है  है  चाहता हूं  चाहिए  दीजिये  देना  देने  देना है  देने है"
line4 = chat4.split("  ")
# for item in line4:
#     print("*",item)

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
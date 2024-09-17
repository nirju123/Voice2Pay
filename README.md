# Webapp which can Process Voice Command in Hindi To make Payment
---
## Background:
- Number of smartphone users in India is around 800 million by 2023. `~ Ministry of Information Broadcating`
- Number of upi (digital payment) users in India is around 300 million.  `~ National Payment Corporation of India`
- The primary reasons for such a difference in number is:
  1. Digital divide and
  2. Lack of english literacy.
- Only 38 % of households in India are digitally literate. In urban areas, digital literacy is
relatively higher at 61% as compared to just 25% in rural areas. `~ Ministry of Labour & Employment`
- Best estimate is 30 % Indian can speak english.
  
## Problem:
A very large part of Population can not access digital services of government despite being free of cost and having access of smartphones.
I am working on one such digital service UPI (payment service) to be accessible by people with low digital and english literacy.
  
---
`It is evident from the many report that the growth of digital services alone
cannot be considered the ultimate solution for all of India’s challenges. Without addressing the causes of 
digital divide and implementing short term solution , the ongoing digital revolution across
healthcare, education, and finance, if left unchecked, will not only continue to foster
inequalities, but may also worsen them and not just in one field but with time will spread to
other divide like inequaliy of opportunities and income and wealth.`

---
## Solution:
1. Idea is to make a Machine or Deep learning model to understand voice commands in various Indic languages.
2. Integrate it with app/webapp to navigate user within app to  make or accept or reject payment pages.

---
## Execution:
Trained a ML model to understand hindi commands as instructions to make Payment, get Payment, and ignore random comments. 

##### Why Machine learning?
1. Supervised Deep learning solution requires a lot of labeled text of such rare and specific text commands.
2. Unsupervised Deep learning model like llms can solve this, but that require a lot of resources and at this point of time there is no public open source llm trained on hindi texts which i can use.
3. Keeping in mind we need a llm model for each Indic language and then to integrate it with app which needs lot of resources, any ml solution with reasonable accuracy is better than a Deep learning solution.

## Dataset:
- I do not have resources to scrape a huge quantity of text and then find the rare occurences among them which is of my use.
- Still after this there will be a probabilty that you missed some of the rare used occurence of some words or some region specific words, requireing frequent updation of data and training of model with time.
- Hence i tried to create artificial data.
- Our data can be broadly classified into two types of texts: first random texts which can be scrapped from interenet in abundant quantity and secondly meaningful texts for classification.
---
##### Process of Data Creation:
- Pronouns in Hindi: `"मैं  मैंने  हम  हमने  मुझे मुझको हमें हमको हम मुझसे मेरे द्वारा हमसे हमारे हमको  हमें मेरा मेरी मेरे	हमारा हमारी हमारे मुझमें हममें मेरेको "`
- Words used for money `"रूपया रूपये पैसा पैसे"`
- Verbs in Hindi `"लेने  लेना  स्वीकृति  स्वीकार  सकारना  अंगीकार  प्रतिग्रहीत  मांगना मांग  दरकार  अनुरोध  चाहना  दावा  मांग जताना  आकांक्षा "`
- Other Words `"करना है" , "है"," ","चाहता हूं","चाहिए" `

- I scrapped as many nouns, pronouns, verb, and other words and their synonyms necessary to make such meaningful texts 
- Used a for loop to concatenate them in all possible reasonable orders,
- This lead to few examples which are either jumbled or just don't make sense but will be classified as valid commands,
- But, probabilty that a user will open an app then give command similar to valid commands but in jumbled order
and mean nothing is less and hence i ignored them.

Final data is stored in data.csv file. data.csv files and all the python scripts used to create artificial data is in data folder.

Frequency of  various labels after droping duplicates: 
- `class`  `Frequency`    `Examples`
- `class 0` `83078`   `मैंने नहीं रूपया भेजना है, नहीं क्यो आर देने है`
- `class 1` `6801`     `मैंने रूपया भेजना है, मुझको रूपया भेजना दीजिये `
- `class 2` `16206`   `मैं रूपया लेने है, क्यो आर देना है`
- `class 3`  `256025`  `करते रहे विलाप होकर निःशब्द, आज युवा आशा और आकांक्षाओं से भरे हुए हैं।`

Use of various class:
- `class`  `Its uses`  
- `class 3`  `random statements scrapped from internet`
- `class 2` ` statements meant to accept payment or ask qr code, payment id, phone number or other banking credentials`
- `class 1` `statements meant to send money/make payment`
- `class 0` `contains label 1 and label 2 examples but appended with 'नहीं' i.e not in english,these are negative statements (expresses a negation, denial, disagreement, or falsehood)`

###### class 3 which is random statement is a lot more than others, we are just taking a part of it  , around 50000 instances

## Process:
### ML processes:
- Cleaned the text
  - removed html tags
  - removed urls
- Convert the text into Bag of Words representation
  - Used CountVectorizer object with a custom tokenizer as CountVectorizer was not correctly handling non-ASCII characters
  - Used nltk.tokenize import word_tokenize for tokenization of non-ASCII characters in Hindi input texts
- Feature creation ( column denoteing presence of negative word 'नहीं' i.e not in english)
- Trained various Machine learning algorithms on data, performance of Random forrest classifier was best among them, so kept it.
- Downloaded the pkl file for model and countvectorizer to integrate in backend
### Development Processes:
- Developed a react webapp (all files in payapp folder)
- Developed a backend with flask and mongodb (all files in pay_backend folder)
- Integrated the downloaded ml model with backend
- Integrated the backend and frontend, so that if voice command is given it send it to backend and backend send
classification results on the basis of which frontend respond appropriately

## Results:
### ML Results:
- Class 0:
  - Precision: 1.00
  - Recall: 1.00
  - F1-Score: 1.00
  - Support: 16580
- Class 1:
  - Precision: 0.98
  - Recall: 0.97
  - F1-Score: 0.98
  - Support: 1343
- Class 2:
  - Precision: 0.99
  - Recall: 0.99
  - F1-Score: 0.99
  - Support: 3304
- Class 3:
  - Precision: 1.00
  - Recall: 1.00
  - F1-Score: 1.00
  - Support: 10773

- Overall Accuracy: 1.00
### Development Results:
- Welcome Page:
![image](https://github.com/nirju123/Voice2Pay/blob/main/webapp_img/welcomepage.png)

- Login Page:
![image](https://github.com/nirju123/Voice2Pay/blob/main/webapp_img/login.png)

- New User Registration Page:
![image](https://github.com/nirju123/Voice2Pay/blob/main/webapp_img/new_user.png)

- Home Page: as you can see it have two buttons start and stop listening ,clicking on start, webapp start to hear the given
voice command , on click of stop it stops and send the command to backend for recognition
![image](https://github.com/nirju123/Voice2Pay/blob/main/webapp_img/home.png)

- Act of listening:
![image](https://github.com/nirju123/Voice2Pay/blob/main/webapp_img/voice_command(1).png)

- Payment Page: if command was to make payment it will auto navigate to payment page, fill details and click send.
![image](https://github.com/nirju123/Voice2Pay/blob/main/webapp_img/make_payment.png)

- Credentials Page: if command meant to accept payment or asking for qr/payment id/phone number/ banking details etc then it will navigate to credentials page.
![image](https://github.com/nirju123/Voice2Pay/blob/main/webapp_img/get_payment.png)











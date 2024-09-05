import pickle
import re
from fuzzywuzzy import fuzz
import numpy as np
import pandas as pd
import nltk
import warnings

# Suppress FutureWarnings related to is_sparse
warnings.filterwarnings("ignore", category=FutureWarning, module="sklearn.utils.validation")



with open('model.pkl', 'rb') as file:
    model_data = pickle.load(file)

rf = model_data['model']
feature_names = model_data['feature_names']
cv = pickle.load(open('cv.pkl','rb'))

vocab = ['लेने','देने','प्रतिग्रहीत','चाहिए','चाहना','भेजना','सौंपना','मांग जताना','हमारी','क्यू आर','मुझे','मुझमें', 'रूपये','पठवाना','यूपीआई आईडी','मैं','मेरा','मुझको','भिजवा','स्वीकार',
         'फ़ोन नंबर','है','भिजवाना','अनुरोध','प्रेषित','अदायगी','दरकार','पठा','दावा', 'हमसे', 'मैंने','हमें','लेना','मांगना','नंबर','रूपया','आईडी','के आर','क्यो आर','मांग','पैसे','हमको','हमारे','पारित','भेज',
         'करना','यूपीआई','द्वारा','मुझसे','हमने','मेरी','आकांक्षा ', 'देना','दीजिये ','हमारा','सकारना','क्यों आर','मेरेको','अंगीकार','पैसा','करना है','स्वीकृति','हम','चुकाना','हममें', 'अंशदान','मेरे','नहीं','चुका','कर दीजिये ','अदा','चाहता हूं']
word_neg = ['नहीं']
def fun2(chat):
    words = chat.strip().split()
    for i in range(len(words)):
        x = None
        ratio = 0
        for item in vocab:
            val = fuzz.ratio(item, words[i])
            if val>=66 and val>ratio:
                x = item
                ratio = val
        if ratio>=66:
            words[i]=x
    chat = " ".join(words)
    pattern = r'\b\d+(\.\d+)?\b'
    chat = re.sub(pattern, 'रूपये', chat)
    return chat
def fun1(chat):
    word_list = chat.strip().split()
    for word in word_list:
        if word in word_neg:
            return 1
    return 0

def predict(chat):
    text = fun2(chat)
    item = [text]
    t1 = cv.transform(item).toarray()
    val = fun1(item[0])
    t1 = np.append(t1, val)
    data_df = pd.DataFrame([t1], columns=feature_names)
    y = rf.predict(data_df)
    print(y,"*")
    return y[0]


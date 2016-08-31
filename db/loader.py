import csv
import requests
import json

url = 'http://192.168.99.100:9200/quran/verse'

with open('surah-names.csv', 'rU') as csvfile:
    spamreader = csv.DictReader(csvfile, delimiter=',', quotechar='|')
    surahs = dict()
    for row in spamreader:
        surahs[row['Number']] = { 'arabicName': row['Arabic name'], 'englishName': row['English Translation'] }

with open('English-Ahmed-Ali-100.csv', 'rU') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    for row in spamreader:
        verse = ' ' .join(row)

        verse = verse.replace('\t', '').replace('\"', '')

        surahIndex = verse.index('|', 0)
        surahNumber = verse[0:surahIndex]

        verseIndex = verse.index('|', surahIndex+1)
        verseNumber = verse[surahIndex+1:verseIndex]

        verseText = verse[verseIndex+1:]

        payload = {'surahNumber': int(surahNumber),
                    'surahArabicName': surahs[surahNumber]['arabicName'] ,
                    'surahEnglishName' : surahs[surahNumber]['englishName'] ,
                    'verseNumber': int(verseNumber),
                    'verse': verseText}
        r = requests.post(url, data=json.dumps(payload))
        print (r.status_code)

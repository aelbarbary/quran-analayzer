import csv
import requests
import json

url = 'http://192.168.99.100:32769/quran/verse'

with open('surah-names.csv', 'rU') as csvfile:
    spamreader = csv.DictReader(csvfile, delimiter=',', quotechar='|')
    data = dict()
    for row in spamreader:
        data[row['Number']] = { 'arabicName': row['Arabic name'], 'englishName': row['English Translation'] }
    print (data[str(4)]['arabicName'])

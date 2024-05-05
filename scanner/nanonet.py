import requests

url = 'https://app.nanonets.com/api/v2/OCR/Model/c793292e-86cd-45ff-9545-58e487768d51/LabelFile/?async=false'

data = {'file': open('image/struk4.png', 'rb')}

response = requests.post(url, auth=requests.auth.HTTPBasicAuth('eeb6b933-0a11-11ef-a76e-da0c4b140285', ''), files=data)

print(response.text)
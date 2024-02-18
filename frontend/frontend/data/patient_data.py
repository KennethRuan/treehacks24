import json

data = [
	{
        "Patient ID:": "0f0327a7-9e4f",
		"Age": 20,
		"Height (cm)": 152,
		"Blood Type": "A",
		"Pediatric Status": "No",
		"Location": "Houston, Texas",
		"MELD Score": 14,
		"HLA-B27 Antibodies": "Positive",
        "Terra Wearable ID": "b844c120-288e-43b1-9c5b-3a40a3c0056a"
	},
	{
        "Patient ID:": "677b97e0-6d53",
		"Age": 50,
		"Height (cm)": 184,
		"Blood Type": "O",
		"Pediatric Status": "No",
		"Location": "San Francisco, CA",
		"MELD Score": 11,
		"HLA-B27 Antibodies": "Negative",
        "Terra Wearable ID": "b844c120-288e-43b1-9c5b-3a40a3c0056a"
	},
    {
        "Patient ID": "aa821b6d-37e8",
        "Age": 8,
        "Height (cm)": 120,
        "Blood Type": "B",
        "Pediatric Status": "Yes",
        "Location": "Chicago, Illinois",
        "MELD Score": 5,
        "HLA-B27 Antibodies": "Negative",
        "Terra Wearable ID": "b844c120-288e-43b1-9c5b-3a40a3c0056a"
    },
    {
        "Patient ID": "de3b123a-94c6",
        "Age": 4,
        "Height (cm)": 95,
        "Blood Type": "AB",
        "Pediatric Status": "Yes",
        "Location": "Los Angeles, California",
        "MELD Score": 8,
        "HLA-B27 Antibodies": "Positive",
        "Terra Wearable ID": "b844c120-288e-43b1-9c5b-3a40a3c0056a"
    },
    {
        "Patient ID": "1f9b2680-40aa",
        "Age": 35,
        "Height (cm)": 170,
        "Blood Type": "O",
        "Pediatric Status": "No",
        "Location": "New York City, New York",
        "MELD Score": 33,
        "HLA-B27 Antibodies": "Negative",
        "Terra Wearable ID": "870ccf19-370a-411a-85fa-9e2e7c997360"
    },
    {
        "Patient ID": "db37e925-c7ac",
        "Age": 10,
        "Height (cm)": 135,
        "Blood Type": "A",
        "Pediatric Status": "Yes",
        "Location": "Miami, Florida",
        "MELD Score": 6,
        "HLA-B27 Antibodies": "Positive",
        "Terra Wearable ID": "870ccf19-370a-411a-85fa-9e2e7c997360"
    },
    {
        "Patient ID": "34fe3b7a-81d2",
        "Age": 28,
        "Height (cm)": 180,
        "Blood Type": "B",
        "Pediatric Status": "No",
        "Location": "Seattle, Washington",
        "MELD Score": 28,
        "HLA-B27 Antibodies": "Negative",
        "Terra Wearable ID": "870ccf19-370a-411a-85fa-9e2e7c997360"
    },
    {
        "Patient ID": "8f24da5c-d210",
        "Age": 6,
        "Height (cm)": 110,
        "Blood Type": "O",
        "Pediatric Status": "Yes",
        "Location": "Dallas, Texas",
        "MELD Score": 25,
        "HLA-B27 Antibodies": "Negative",
        "Terra Wearable ID": "870ccf19-370a-411a-85fa-9e2e7c997360"
	},
    {
        "Patient ID": "77e821b2-a64e",
        "Age": 77,
        "Height (cm)": 168,
        "Blood Type": "B",
        "Pediatric Status": "No",
        "Location": "Las Vegas, Nevada",
        "MELD Score": 39,
        "HLA-B27 Antibodies": "Positive",
        "Terra Wearable ID": "870ccf19-370a-411a-85fa-9e2e7c997360"
    },
    {
        "Patient ID": "4bdc4631-7aef",
        "Age": 55,
        "Height (cm)": 175,
        "Blood Type": "O",
        "Pediatric Status": "No",
        "Location": "San Jose, CA",
        "MELD Score": 18,
        "HLA-B27 Antibodies": "Negative",
        "Terra Wearable ID": "870ccf19-370a-411a-85fa-9e2e7c997360"
	}
]

# with open("patient_data.json", "w") as file:
#     json.dump(data, file)


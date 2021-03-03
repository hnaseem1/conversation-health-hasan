const data = {
    "coord": {
        "lon": -75.6981,
        "lat": 45.4112
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 272.4,
        "feels_like": 266.93,
        "temp_min": 272.04,
        "temp_max": 272.59,
        "pressure": 1011,
        "humidity": 74
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.12,
        "deg": 290
    },
    "clouds": {
        "all": 75
    },
    "dt": 1614812066,
    "sys": {
        "type": 1,
        "id": 872,
        "country": "CA",
        "sunrise": 1614771435,
        "sunset": 1614811944
    },
    "timezone": -18000,
    "id": 6094817,
    "name": "Ottawa",
    "cod": 200
};

const returnMockResponse= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({"data": data})
    }, 300);
});

export default returnMockResponse;
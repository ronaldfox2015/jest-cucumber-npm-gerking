FROM python:3
ENV APP_DIR=/app

RUN mkdir $APP_DIR

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./your-daemon-or-script.py" ]
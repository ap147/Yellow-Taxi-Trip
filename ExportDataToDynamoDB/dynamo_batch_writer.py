import boto3
import csv

# Remember to setup your aws creds (by using aws configure)
dynamodb = boto3.resource('dynamodb', 'us-east-2')


def batch_write(table_name, rows):
    table = dynamodb.Table(table_name)

    with table.batch_writer() as batch:
        for row in rows:
            batch.put_item(Item=row)
    return True


def read_csv(csv_file, list):
    rows = csv.DictReader(open(csv_file))

    for row in rows:
        list.append(row)


if __name__ == '__main__':
    table_name = 'drivers'
    items = []
    file_name = 'Medallion_Vehicles_Authorized.csv'

    read_csv(file_name, items)
    status = batch_write(table_name, items)

    if status:
        print("Data Successfully Uploaded.")
    else:
        print("Something went wrong..")

# SQL With DataGrip
## Create a Table And Import Data
Right click on a schema and click `Import Data From File(s)...`. Choose a CSV file and click open. In the table dropdown menu, enter `tmp` or some other new table name. Click the checkbox for *First row is header* if this is true. Modify the Columns window so that the data types are accurate and click the checkbox *Not null* for each column in this same window if necessary. Click `Import` button.

## Modify a Table Using Data From Temporary Table
Run a query like so:
```
UPDATE user_device ud, tmp
SET ud.device_manager = tmp.device_manager,
    ud.manager_email  = tmp.manager_email,
    ud.manager_phone  = tmp.manager_phone
WHERE ud.asset_id = tmp.asset_id
  AND user_id = 5551
```
## Delete Temporary Table
Right click on the table and click `Drop`.
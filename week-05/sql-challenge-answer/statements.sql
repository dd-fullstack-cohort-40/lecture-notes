-- Write and execute three insert statements on a strong entity table based on the DDL from question 1. Reminder: Strong Entities have no foreign keys.
INSERT INTO profile(profile_id, profile_about_me, profile_email, profile_hash, profile_name) VALUES (gen_random_uuid(), 'about profile 1', 'profile1@gmail.com', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'profile 1 name');
INSERT INTO profile(profile_id, profile_about_me, profile_email, profile_hash, profile_name) VALUES (gen_random_uuid(), 'about profile 2', 'profile2@gmail.com', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2', 'profile 2 name');
INSERT INTO status(status_id, status_value, status_color) VALUES (gen_random_uuid(), 'in process', '00a0b0');

-- Write and execute an update statement on a row created in question 1
UPDATE profile SET profile_about_me = 'I am super awesome!' WHERE profile_id = 'd8140a2e-e1e1-4df3-9c66-8f54a723b9bf';

-- Write and execute a delete statement on a row created in question 1
DELETE FROM profile WHERE profile_id = 'd8140a2e-e1e1-4df3-9c66-8f54a723b9bf';

-- Write and execute an insert statement on a table with a foreign key that references the original table in question 1.
INSERT INTO project(project_id, project_profile_id, project_due_date, project_description, project_name) VALUES (gen_random_uuid(), '422616f6-46ba-4751-aed2-c47878e286c6', '2022-11-10', 'project 1 description', 'project 1 name');

-- Write and execute a select statement for a row using its primary key as the selector.

SELECT project_id, project_profile_id, project_due_date, project_description, project_name FROM project WHERE project_id = 'cfc5d9fa-3ac5-4319-9b90-b3cbd264455b';

-- Write and execute a select statement that incorporates both a where clause and an inner-join.

SELECT project_id, project_profile_id, project_due_date, project_description, project_name, profile.profile_name FROM project INNER JOIN profile on project.project_profile_id = profile.profile_id WHERE project.project_name like '%1%';
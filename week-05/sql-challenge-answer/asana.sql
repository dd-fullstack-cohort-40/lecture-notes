DROP TABLE IF EXISTS ticket_status;
DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS ticket;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS profile(
	profile_id uuid PRIMARY KEY,
	profile_about_me VARCHAR(512),
	profile_email VARCHAR(64) NOT NULL UNIQUE,
	profile_hash CHAR(97) NOT NULL,
	profile_name VARCHAR(32) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS project(
	project_id uuid PRIMARY KEY,
	project_profile_id uuid NOT NULL,
	project_due_date date,
	project_description VARCHAR(512),
	project_name VARCHAR(32) NOT NULL UNIQUE,
	FOREIGN KEY (project_profile_id) REFERENCES profile(profile_id)
);
CREATE INDEX ON project(project_profile_id);

CREATE TABLE IF NOT EXISTS ticket(
	ticket_id uuid PRIMARY KEY,
	ticket_profile_id uuid NOT NULL,
	ticket_project_id uuid NOT NULL,
	ticket_description VARCHAR(512),
	ticket_due_date date,
	ticket_name VARCHAR(32) NOT NULL,
	FOREIGN KEY (ticket_profile_id) REFERENCES profile(profile_id),
	FOREIGN KEY (ticket_project_id) REFERENCES project(project_id)
);
CREATE INDEX ON ticket(ticket_profile_id);
CREATE INDEX ON ticket(ticket_project_id);

CREATE TABLE IF NOT EXISTS status(
	status_id uuid PRIMARY KEY,
	status_value VARCHAR(32) NOT NULL,
	status_color bytea NOT NULL
);

CREATE TABLE IF NOT EXISTS ticket_status(
	ticket_status_status_id uuid NOT NULL,
	ticket_status_ticket_id uuid NOT NULL,
	ticket_status_date date NOT NULL ,
	FOREIGN KEY (ticket_status_status_id) REFERENCES status(status_id),
	FOREIGN KEY (ticket_status_ticket_id) REFERENCES ticket(ticket_id),
	PRIMARY KEY (ticket_status_status_id, ticket_status_ticket_id)
);
CREATE INDEX ON ticket_status(ticket_status_status_id);
CREATE INDEX ON ticket_status(ticket_status_ticket_id);
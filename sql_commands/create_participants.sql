-- Create the Participants table for tracing RSVPs
CREATE TABLE trip_participants (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    player_name TEXT UNIQUE NOT NULL,
    arrival_date DATE,
    arrival_transport TEXT,
    departure_date DATE,
    departure_transport TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security (RLS) but allow anonymous access (Honors System)
ALTER TABLE trip_participants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
ON trip_participants
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow public insert access"
ON trip_participants
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public update access"
ON trip_participants
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public delete access"
ON trip_participants
FOR DELETE
TO public
USING (true);

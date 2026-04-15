-- Create the Scoreboard table for the Texas Redneck Week
CREATE TABLE redneck_scoreboard (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    player_name TEXT UNIQUE NOT NULL,
    completed_items TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security (RLS) but allow anonymous access (Honors System)
ALTER TABLE redneck_scoreboard ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
ON redneck_scoreboard
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow public insert access"
ON redneck_scoreboard
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public update access"
ON redneck_scoreboard
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public delete access"
ON redneck_scoreboard
FOR DELETE
TO public
USING (true);

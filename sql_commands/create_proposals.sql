-- Create the Checklist Proposals table for the Texas Redneck Week
CREATE TABLE checklist_proposals (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    proposal_text TEXT NOT NULL,
    proposed_by TEXT NOT NULL,
    voters_for TEXT[] DEFAULT '{}',
    voters_against TEXT[] DEFAULT '{}',
    enacted BOOLEAN DEFAULT false,
    rejected BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security (RLS) but allow anonymous access (Honors System)
ALTER TABLE checklist_proposals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
ON checklist_proposals
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow public insert access"
ON checklist_proposals
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public update access"
ON checklist_proposals
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public delete access"
ON checklist_proposals
FOR DELETE
TO public
USING (true);

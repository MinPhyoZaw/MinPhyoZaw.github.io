/*
  # Create chat messages table

  1. New Tables
    - `chat_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person sending the message
      - `email` (text) - Email address of the sender
      - `message` (text) - The actual message content
      - `created_at` (timestamptz) - Timestamp when message was sent
      - `read` (boolean) - Whether the message has been read
  
  2. Security
    - Enable RLS on `chat_messages` table
    - Add policy to allow anyone to insert messages (public contact form)
    - No SELECT policies needed as this is for receiving messages only
*/

CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send messages"
  ON chat_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
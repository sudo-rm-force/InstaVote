
CREATE TABLE [dbo].[testvoters](
	[voter_id] [varchar] IDENTITY(1,1) NOT NULL,
	[user] [varchar] NOT NULL,
	[gender] [varchar] NOT NULL,
	[face_id] [varchar] NULL,
	[mobile_no] [varchar] NOT NULL,
	[date] [timestamp] NOT NULL,
)
GO

SELECT * FROM voters;
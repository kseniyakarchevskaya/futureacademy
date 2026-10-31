const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: '192.168.125.27',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

app.get('/api/courses', async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT course_id, title, description, age_group, difficulty,
				course_type, direction, duration_months, discount_percent, card_color
			 FROM courses
			 ORDER BY course_id ASC`
		);
		res.json(result.rows);
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: 'database error' });
	}
});

app.get('/api/blog-posts1', async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
				id,
				title,
				description,
				category,
				publication_date,
				author,
				image_url,
				display_order
			 FROM blog_posts1
			 ORDER BY display_order ASC`
		);
		res.json(result.rows);
	} catch (e) {
		console.error(e);
		res.status(500).json({
			error: 'database error'
		});
	}
});
app.get('/api/article-classic', async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
				introduction_text,
				main_body_text,
				conclusion_text
			 FROM single_article_content
			 LIMIT 1`
		);
		
		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'content not found' });
		}
		
		res.json(result.rows[0]);
	} catch (e) {
		console.error(e);
		res.status(500).json({
			error: 'database error'
		});
	}
});
app.post('/api/register', async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res.status(400).json({ error: 'missing fields' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const result = await pool.query(
			`INSERT INTO users_auth (user_name, user_email, user_password)
			 VALUES ($1, $2, $3)
			 RETURNING user_id, user_name, user_email`,
			[name, email, hashedPassword]
		);

		res.status(201).json(result.rows[0]);
	} catch (e) {
		console.error(e);
		if (e.code === '23505') {
			return res.status(400).json({ error: 'email already exists' });
		}
		res.status(500).json({ error: 'database error' });
	}
});
app.get('/api/reviews', async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
				review_id,
				student_name,
				course_title,
				review_text,
				review_rating,
				student_avatar
			 FROM student_reviews
			 ORDER BY display_order ASC`
		);
		res.json(result.rows);
	} catch (e) {
		console.error(e);
		res.status(500).json({
			error: 'database error'
		});
	}
});

app.get('/api/vacancies', async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
				vacancy_id,
				vacancy_title,
				vacancy_city,
				vacancy_category,
				vacancy_greeting,
				vacancy_target,
				vacancy_duties,
				vacancy_requirements,
				vacancy_benefits,
				vacancy_footer
			 FROM academy_vacancies
			 ORDER BY display_order ASC`
		);
		res.json(result.rows);
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: 'database error' });
	}
});

app.get('/api/founder-interview', async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
				founder_name,
				founder_role,
				founder_avatar,
				interview_paragraph_1,
				interview_paragraph_2,
				interview_source
			 FROM academy_founders
			 ORDER BY display_order ASC
			 LIMIT 1`
		);
		
		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'founder data not found' });
		}
		
		res.json(result.rows[0]);
	} catch (e) {
		console.error(e);
		res.status(500).json({ error: 'database error' });
	}
});

app.get('/api/teachers', async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT 
				teacher_id,
				teacher_name,
				teacher_info_1,
				teacher_info_2,
				teacher_avatar
			 FROM teachers_reviews
			 ORDER BY display_order ASC`
		);
		res.json(result.rows);
	} catch (e) {
		console.error(e);
		res.status(500).json({
			error: 'database error'
		});
	}
});
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

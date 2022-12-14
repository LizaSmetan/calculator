## Problem Statement:

At HH Global a "job" is a group of print items. For example, a job can be a run of business cards,
envelopes, and letterhead together.

Some items qualify as being sales tax free, whereas, by default, others are not. Sales tax is 7%.

HH Global also applies a margin, which is the percentage above printing cost that is charged to the
customer. For example, an item that costs $100 to print that has a margin of 11% will cost:

item: $100 -> $7 sales tax = $107

job: $100 -> $11 margin

total: $100 + $7 + $11 = $118

The base margin is 11% for all jobs this problem. Some jobs have an "extra margin" of 5%. These jobs
that are flagged as extra margin have an additional 5% margin (16% total) applied.

The final cost is rounded to the nearest even cent. Individual items are rounded to the nearest cent.
Write a client-side desktop application, that calculates the total charge to a customer for a job, with a
special focus on usability and UI.

***

## Getting Started

The following commands must be run from the "calculator" directory

To install packages, run:

```bash
yarn install
```

First, run the development server:

```bash
yarn dev
```

Or run production mode:

```bash
yarn build
```

then 

```bash
yarn start
```

The site will be availible on http://localhost:3000

You can change some data, such as company name, level of taxes etc in file "calculator/src/settings.json".
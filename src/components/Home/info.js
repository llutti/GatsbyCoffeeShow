import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info()
{
  return (
    <section className='py-5'>
      <div className='containter'>
        <Title title='our story'/>
        <div className='row'>
          <div className='col-10 col-sm-8 mx-auto text-center'>
            <p className='lead text-muted mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem suscipit culpa libero voluptates corrupti ipsam nisi rerum dolore ducimus, ex eligendi quidem sed ipsum, dolorem cumque ea! Maiores expedita fugit, optio tempore ut soluta enim voluptatem aperiam corrupti harum necessitatibus error. Unde architecto laudantium repellendus consectetur cumque? Quidem, doloribus?
            </p>
            <Link to='/about/'>
              <button className='btn text-uppercase btn-yellow'>about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
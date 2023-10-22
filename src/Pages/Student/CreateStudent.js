import React from 'react'

const CreateStudent = () => {
  return(
            <>
                <form>
                    <h1 className='mb-5 text-center'>Create Student</h1>
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Student Name</label>
                        <input type="text" className="form-control" id="InputEmail1" placeholder='Enter Student Name here' />
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
                    <hr/>
                    <br/>
                    <hr/>
                <table className="table  table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>
                                <button className='btn btn-success me-1 btn-sm'>View</button>
                                <button className='btn btn-primary me-1 btn-sm'>Edit</button>
                                <button className='btn btn-danger me-1 btn-sm'>Delete</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </>
        )
}

export default CreateStudent
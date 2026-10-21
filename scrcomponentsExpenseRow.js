import React from 'react';
import { Link } from 'react-router-dom';
import { formatMoney } from '../data';

function ExpenseRow({ expense, onDelete, onTogglePaid }) {
    return (
        <tr>
            <td>
                <Link to={`/expenses/${expense.id}`}>{expense.title}</Link>
            </td>
            <td>{formatMoney(expense.amount)}</td>
            <td className="col-category">{expense.category}</td>
            <td className="col-date">{expense.date}</td>
            <td>{expense.paid ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
            <td>
                <button onClick={() => onTogglePaid(expense.id)}>
                    {expense.paid ? 'Đánh dấu chưa thanh toán' : 'Đánh dấu đã thanh toán'}
                </button>
                <button onClick={() => onDelete(expense.id)}>Xóa</button>
            </td>
        </tr>
    );
}

export default ExpenseRow;
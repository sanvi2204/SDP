import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
const AdminUser = () => {

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
      let data = [];
      for(let i=0; i<10; i++) {
        data.push({
          id: i,
          name: `User ${i+1}`,
          event: "Event XYZ",
          details: {
            price: 100,
            date: "28-07-2024",
            count: 4
          }
        });
      }
      setUsersData(data);
    }, []);

    return (
        <div className="flex flex-row p-4 gap-4">   
            <Table>
              <TableHeader>
                <TableHead>
                  Name of the User
                </TableHead>
                <TableHead>
                  Name of the Event
                </TableHead>
                <TableHead>
                  More Actions
                </TableHead>
              </TableHeader>
              <TableBody>
                {usersData.map((userData) => (
                  <TableRow>
                    <TableCell>{userData.name}</TableCell>
                    <TableCell>{userData.event}</TableCell>
                    <TableCell>
                      <Button className="">Get Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
    )
}

export default AdminUser
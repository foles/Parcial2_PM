using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ejercicio2_ManejoDeImagenes
{
    public partial class Form1 : Form
    {
        Bitmap bmp;
        Color c1;
        public Form1()
        {
            InitializeComponent();
        }

        private void button2_Click_1(object sender, EventArgs e)
        {
            openFileDialog2.Filter = "Archivos JPG|*.jpg|Archivos BMP|*.bmp|All Files|*.*";
            openFileDialog2.ShowDialog();
            bmp = new Bitmap(openFileDialog2.FileName);
            pictureBox2.Image = bmp;
        }

   
       
        
        private void button5_Click(object sender, EventArgs e)
        {
            Bitmap bmp1 = new Bitmap(pictureBox2.Image);
            Bitmap bmp2 = new Bitmap(bmp.Width, bmp.Height);
            Color c = new Color();
            int rm, gm, bm;
            for (int i = 0; i < bmp.Width; i++)
                for (int j = 0; j < bmp.Height; j++)
                {
                    c = bmp1.GetPixel(i, j);
                    rm = c.R;
                    gm = c.G;
                    bm = c.B;

                    if (rm < 130 && gm < 130 && bm < 130)
                        bmp2.SetPixel(i, j, Color.Black);
                    else
                        bmp2.SetPixel(i, j, Color.White);

                }
            pictureBox2.Image = bmp2;
        }


       
    }
}
